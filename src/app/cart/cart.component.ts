import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuider.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuider: FormBuilder
  ) {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Seu pedido foi enviado', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
