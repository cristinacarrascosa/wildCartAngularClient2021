import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckSession } from 'src/app/class/check.session.class';
import { Constants } from 'src/app/model/constants';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-carrito-plist-user-routed',
  templateUrl: './carrito-plist-user-routed.component.html',
  styleUrls: ['./carrito-plist-user-routed.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CarritoPlistUserRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.user;
  strEntity: string = Constants.ENTITIES.cart;
  strOperation: string = Constants.OPERATIONS.plist;
  oUserSession: IUsuario;
  id_producto: number = null;
  id_usuario: number = null;  
  tipousuarioSession_id: number = null;  

  constructor(
    protected oRouter: Router,
    public oMetadataService: MetadataService,
    private oActivatedRoute: ActivatedRoute,
    private oCarritoService: CarritoService
  ) {
    super(Constants.PROFILES.user, oRouter, oActivatedRoute);
    this.id_producto = this.oActivatedRoute.snapshot.params.id_producto;
    this.id_usuario = this.oActivatedRoute.snapshot.params.id_usuario;
  }

  ngOnInit(): void { }

  onAddCarrito(id_producto: number) {
    this.oCarritoService.notifyCarritoChange('add');
  }

}
