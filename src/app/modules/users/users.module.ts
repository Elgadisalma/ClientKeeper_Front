import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from '../../components/clients/client-list/client-list.component';
import { ClientApprouveComponent } from '../../components/clients/client-approuve/client-approuve.component';

@NgModule({
  declarations: [ClientListComponent, ClientApprouveComponent],
  imports: [CommonModule],
})
export class UsersModule {}
