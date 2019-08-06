import { Component, OnInit } from '@angular/core';
import { carpetasMenu } from '../Modules/carpetaMenu.module';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  nMenu=0;
  carpetaMenu:carpetasMenu[]=[];

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  crearCarpeta(nombre:string){
    const nuevaCarpeta=new carpetasMenu(nombre);
    this.carpetaMenu.unshift(nuevaCarpeta);
  }

  eliminarCarpeta(indice) {
    let index = this.carpetaMenu.indexOf(indice);

    console.log('Este es el indice: '+indice);

    if (index > -1) {
      this.carpetaMenu.splice(index, 1);
    }

  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Crear nueva carpeta',
      inputs: [
        {
          name: 'carpeta',
          type: 'text',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: data => {
            this.crearCarpeta(data.carpeta);
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
