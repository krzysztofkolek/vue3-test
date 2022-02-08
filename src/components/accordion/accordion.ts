import { Options, Vue } from "vue-class-component";
import AccordionService, { CatApiDataContainer } from "./accordion.service";
@Options({
  props: {
    isLoading: {
      type: String,
      default: true
    },
    catApiData: CatApiDataContainer
  }
})
export default class Accordion extends Vue {
  isLoading!: boolean;
  catApiData!: CatApiDataContainer;
  accordionService: AccordionService = new AccordionService();

  data() {
    return {
      data: new CatApiDataContainer()
    }
  }

  async created() {
    const cats: CatApiDataContainer = await this.accordionService.getCats();
    this.data = Object.assign({}, this.data, cats);
  }
}
