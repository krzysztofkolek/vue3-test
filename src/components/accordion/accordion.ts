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

  // async data() {
  //   console.log("mounted");
  //   this.catApiData = {...await this.accordionService.getCats()};
  //   console.log(this.catApiData);
  //   return {
  //     name:"test"
  //   };
  // }

  data() {
    console.log('asd')
    return {
      data: new CatApiDataContainer()
    }
  }

  async created() {
    console.log('mounted')
    console.log(this)
    const tmp: CatApiDataContainer = await this.accordionService.getCats();
    // this.data().data.set(tmp);
    // (this.$data as CatApiDataContainer).data = tmp;
    // this.$props.catApiData = tmp;

    // this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
      this.data = Object.assign({}, this.data, tmp);




    // return {data: tmp};
  }
}
