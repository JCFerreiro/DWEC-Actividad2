import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-product-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './product-form.component.html'
})
export class ProductFormComponent {

    @Output() productoCreado = new EventEmitter<any>();

    formulario = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        description: new FormControl('', [Validators.required]),
        price: new FormControl(0, [Validators.required, Validators.min(0)]),
        category: new FormControl('', [Validators.required]),
        image: new FormControl('', [Validators.required]),
        active: new FormControl(true)
    });

    enviar() {
        if (this.formulario.valid) {
            this.productoCreado.emit(this.formulario.value);
            this.formulario.reset({
                name: '',
                description: '',
                price: 0,
                category: '',
                image: '',
                active: true
            });
        } else {
            this.formulario.markAllAsTouched();
        }
    }
}
