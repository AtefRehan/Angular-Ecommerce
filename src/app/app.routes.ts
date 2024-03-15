import { Routes } from "@angular/router";
import { CartComponent } from "./Components/Cart/Cart.component";
import { ProductDetailsComponent } from "./Components/productdetails/productdetails.component";
import { ContactusComponent } from "./Components/Contact/Contact.component";
import { AboutusComponent } from "./Components/About/About.component";
import { ActionComponent } from "./Components/Actions/action.component";
import { SomeactionsComponent } from "./Components/someactions/someactions.component";
import { EditComponent } from "./Components/Edit/Edit.component";
import { DeleteComponent } from "./Components/Delete/Delete.component";
import { SignupComponent } from "./Components/signnup/signnup.component";
import { LoginComponent } from "./Components/Login/Login.component";
import { authGuard } from "./Gurards/auth.guard";

export const routes: Routes = [
  { path: "", redirectTo: "signup", pathMatch: "full" },
  {
    path: "home",
    component: ActionComponent,
    title: "HOME",
    canActivate: [authGuard],
  },
  { path: "Cart", component: CartComponent, title: "Cart" },
  { path: "product/:id", component: ProductDetailsComponent, title: "Product" },
  { path: "contactus", component: ContactusComponent, title: "Contact Us" },
  { path: "aboutus", component: AboutusComponent, title: "About Us" },
  { path: "action", component: SomeactionsComponent, title: "Action" },
  { path: "edit", component: EditComponent, title: "Edit" },
  { path: "delete", component: DeleteComponent, title: "Delete" },
  { path: "signup", component: SignupComponent, title: "Sign Up" },
  { path: "login", component: LoginComponent, title: "Login" },
];
