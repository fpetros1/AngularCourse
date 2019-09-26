import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public labelPai: string = 'Nome';

  printBotao(botao: number) {
    console.log(`O botão ${botao} foi clicado`); 
  }

}
