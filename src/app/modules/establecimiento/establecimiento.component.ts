import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiRadio } from '@taiga-ui/kit';
import {TuiButton, TuiHint, TuiTextfield} from '@taiga-ui/core';
import { TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { IconsModule } from '../../icons.module';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiSelectModule} from '@taiga-ui/legacy';

@Component({
  selector: 'app-establecimiento',
  standalone: true,
  imports: [NgFor, TuiRadio, ReactiveFormsModule, IconsModule, 
    FormsModule, TuiButton, TuiInputModule, TuiTextfield, 
    TuiTextfieldControllerModule, TuiSelectModule,
    TuiDataList,
    TuiDataListWrapper,
  ],
  templateUrl: './establecimiento.component.html',
  styleUrl: './establecimiento.component.css'
})
export class EstablecimientoComponent implements OnInit{
  selectedOption: string = '';
  estForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.estForm = this.formBuilder.group({
      nameEstControl: ['', Validators.required],
      nameContactControl: ['', Validators.required],
      telefonoFijoControl: ['', Validators.required],
      telefonoMovilControl: ['', Validators.required],
      telefonoWhatsControl: ['', Validators.required],
      emailControl: ['', Validators.required],
      webControl: ['', Validators.required],
      paisControl: [null, Validators.required],
      provinciaControl: [null, Validators.required],
      departamentoControl: [null, Validators.required],
      direccionControl: ['', Validators.required],
    });
  }

  options = [
    'Hotel', 'Apartamentos', 'Casas', 'Otro tipo de alquiler',
    'Albergue', 'Aparthotel', 'Hostel', 'Establecimiento rural',
    'Villas', 'Bungalows', 'Camping', 'Residencia', 'Pensión'
  ];

  paises = [
    'Perú',
  ];
}
