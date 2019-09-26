import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public ultimoBotaoClicado: number;

  public mostrarLinhaCodigo: boolean = true;

  public salario: number = 10000;

  public linhasDeCodigo: number[] = [
    10,
    20,
    30,
    100
  ];

  public permissoes: string[] = [
    'ADM',
    'MOD',
    'FISC'
  ];

  public formulario: FormGroup;

  private resource: string = 'https://jsonplaceholder.typicode.com';
  private subscriptionGetPosts: Subscription;
  subscriptionSalvarPosts: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ){}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      'nome': [null, Validators.required],
      'idade': [],
      'endereco': this.formBuilder.group({
        'rua': [null, Validators.required],
        'numero': []
      }),
      'permissoes': [[]]
    });
  }

  buscarPosts() {
    this.subscriptionGetPosts = 
      this.httpClient.get(`${this.resource}/posts`)
      .subscribe((posts: any) => {
        console.log(posts);
        this.subscriptionGetPosts.unsubscribe();
      });
  }

  salvarPost() {

    const requestBody = {
      title: 'Nosso primeiro post',
      body: 'Foi um dia emocionante',
      userId: 1
    }

    this.subscriptionSalvarPosts = 
      this.httpClient.post(`${this.resource}/posts`, requestBody)
      .subscribe((posts: any) => {
        console.log(posts);
        this.subscriptionSalvarPosts.unsubscribe();
      });
  }

  onSubmit() {
    if(this.formulario.invalid) {
      const idadeControl = this.formulario.get('idade') as FormControl;
      const nomeControl = this.formulario.get('nome') as FormControl;

      idadeControl.markAsDirty();
      nomeControl.markAsDirty();

      console.log(this.formulario.controls);
    } else {
      console.log(this.formulario.value);
    }
  }

  atualizarBotaoClicado(botao: number) {
    this.ultimoBotaoClicado = botao;
  }

}
