import { Options, Vue } from "vue-class-component";
import ExplorerService, { CatApiDataContainer } from "./explorer.service";
@Options({
  props: {
    isLoading: {
      type: String,
      default: true
    },
    catApiData: CatApiDataContainer
  }
})
export default class Explorer extends Vue {
  isLoading!: boolean;
  catApiData!: CatApiDataContainer;
  service: ExplorerService = new ExplorerService();

  data() {
    return {
      data: new CatApiDataContainer()
    }
  }

  async created() {
    const cats: CatApiDataContainer = await this.service.getCats();
    this.data = Object.assign({}, this.data, cats);
  }
}
