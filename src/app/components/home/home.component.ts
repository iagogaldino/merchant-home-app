import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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
    const numeroTelefone = '5574988578851';
    const mensagem = 'Olá! Petiscaria Movimento.';

    // Construa a URL do WhatsApp
    const urlWhatsapp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;

    // Abra a URL em uma nova janela ou guia
    window.open(urlWhatsapp, '_blank');
  }

}
