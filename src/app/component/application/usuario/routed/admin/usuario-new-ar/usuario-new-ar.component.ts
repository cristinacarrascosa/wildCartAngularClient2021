import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-usuario-new-admin-routed',
  templateUrl: './usuario-new-ar.component.html',
  styleUrls: ['./usuario-new-ar.component.css'],
})

export class UsuarioNewAdminRoutedComponent implements OnInit {

  strEntity: string = "usuario"
  strOperation: string = "new"
  strTitleSingular: string = "Usuario";
  strATitleSingular: string = "El usuario";
  strTitlePlural: string = "Usuarios";
  id: number = null;
  strResult: string = null;
  strUsuarioSession: string;

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oLocation: Location,
    public oIconService: IconService
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(this.strUsuarioSession));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id
    this.strOperation = this.oActivatedRoute.snapshot.url[1].path;

  }

  ngOnInit(): void {
  }

  reportResult = (oResult: any): void => {
    this.strResult = oResult.strMsg;
    this.id = oResult.id;
    this.openPopup();
  };

  goBack(): void {
    this.oLocation.back();
  }

  //popup

  eventsSubjectShowPopup: Subject<void> = new Subject<void>();

  openPopup(): void {
    this.eventsSubjectShowPopup.next();
  }

  onClosePopup(): void {
    this.oRouter.navigate([this.strEntity + '/view/' + this.id]);
  }

}