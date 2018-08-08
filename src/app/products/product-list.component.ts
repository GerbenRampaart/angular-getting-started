import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
@Component({
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  pageTitle = "Product List";
  imageWidth = 50;
  imageMargin = 2;
  showImage = true;
  errorMessage: string;
  _listFilter: string;
  filteredProducts: IProduct[];
  products: IProduct[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
    }, error => this.errorMessage);
  }

  public get listFilter(): string {
    return this._listFilter;
  }

  public set listFilter(v: string) {
    this._listFilter = v;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((p: IProduct) => {
      return p.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
    });
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List: " + message;
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
