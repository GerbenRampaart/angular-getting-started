import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "./product.service";
import { filter } from "rxjs/operators";

@Component({
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  pageTitle = "Product detail";
  allProducts: IProduct[];
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.productService.getProducts().subscribe(products => {
      const filtered = products.filter(p => p.productId === id);
      if (filtered.length !== 1) {
        throw Error("Product not found or multiple found");
      }
      this.product = filtered[0];
      console.log(this.product);
    });
  }

  onBack(): void {
    this.router.navigate(["/products"]);
  }
}
