import { Component } from "@angular/core";
import { IProduct } from "../../models/iproduct";
import { HttpproductsService } from "../../Services/httpproducts.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-delete",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./Delete.component.html",
  styleUrl: "./Delete.component.css",
})
export class DeleteComponent {
  product: IProduct | undefined;
  productId: number | undefined;

  constructor(private httpproduct: HttpproductsService) {}
  onDelete() {
    if (this.productId) {
      this.httpproduct.deleteProduct(this.productId).subscribe(
        () => {
          confirm(`Are you sure to delete this product ?`);
          console.log("Product deleted successfully");
        },
        (error) => {
          alert("This product is unavailable !");
          console.error("Error deleting product:", error);
        }
      );
    } else {
      console.error("Product ID is undefined");
    }
  }
}
