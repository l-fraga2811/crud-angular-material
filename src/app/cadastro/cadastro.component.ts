import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Client } from './cliente';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatInputModule, 
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  client: Client = Client.newCliente();

  constructor(private clientService: ClientService) { 
  }

  save() {
    console.log(this.client);
  }
}
