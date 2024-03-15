import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HomeComponent } from "./Components/Home/Home.component";
import { FooterComponent } from "./Components/Footer/footer.component";
import { NavbarComponent } from "./Components/Navbar/Navbar.component";
import { HeaderComponent } from "./Components/Header/Header.component";
import { ProductComponent } from "./Components/product/product.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    FooterComponent,
    ProductComponent,
    NavbarComponent,
    HeaderComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "my-store";
  description = "my-store description";

  getString() {
    return "get string method works";
  }
}
