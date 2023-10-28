import { Component, OnInit } from '@angular/core';
import { WebServiceService } from 'src/app/services/web-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _webServiceService: WebServiceService) { }

  ngOnInit() {
  }

  onClickOpenLocation(): void {
    window.open('https://maps.app.goo.gl/8XxbJinGfXbWdPJK7');
  }

  onClickOpenGame(): void {
    window.open('https://luck-appluckluck.onrender.com');
  }

  openWhatsapp() {
    // Número de telefone e mensagem
    const numeroTelefone = this._webServiceService.phone;
    const mensagem = this._webServiceService.message;
    const urlWhatsapp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;

    // Abre a URL em uma nova janela ou guia
    window.open(urlWhatsapp, '_blank');
  }

}
