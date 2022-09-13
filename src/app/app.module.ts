import { PaginationService } from './service/pagination.service';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu.component';
import { SessionService } from './service/session.service';
import { HttpClientModule } from '@angular/common/http';
import { SessionResolver } from './resolve/session.resolve';
import { TrimPipe } from './pipe/trim.pipe';
import { showDateTimePipe } from './pipe/showDateTime.pipe';
import { FooterComponent } from './component/shared/unrouted/footer/footer.component';
import { showBooleanPipe } from './pipe/showBoolean.pipe';
import { ModalComponent } from './component/shared/unrouted/modal/modal.component';
import { DateTimeService } from './service/datetime.service';
import { HeaderComponent } from './component/shared/unrouted/header/header.component';
import { TipousuarioPlistRoutedComponent } from './component/application/tipousuario/routed/tipousuario-plist-routed/tipousuario-plist-routed.component';
import { TipousuarioEditRoutedComponent } from './component/application/tipousuario/routed/tipousuario-edit-routed/tipousuario-edit-routed.component';
import { TipousuarioViewRoutedComponent } from './component/application/tipousuario/routed/tipousuario-view-routed/tipousuario-view-routed.component';
import { PlistTipoproductoComponent } from './component/application/tipoproducto/routed/tipoproducto-plist-routed/tipoproducto-plist-routed.component';
import { TipoproductoNewRoutedComponent } from './component/application/tipoproducto/routed/tipoproducto-new-routed/tipoproducto-new-routed.component';
import { TipoproductoEditRoutedComponent } from './component/application/tipoproducto/routed/tipoproducto-edit-routed/tipoproducto-edit-routed.component';
import { TipoproductoRemoveRoutedComponent } from './component/application/tipoproducto/routed/tipoproducto-remove-routed/tipoproducto-remove-routed.component';
import { TipoproductoViewRoutedComponent } from './component/application/tipoproducto/routed/tipoproducto-view-routed/tipoproducto-view-routed.component';
import { ProductoPlistAdminRoutedComponent } from './component/application/producto/routed/admin/producto-plist-ar/producto-plist-ar.component';
import { ProductoNewAdminRoutedComponent } from './component/application/producto/routed/admin/producto-new-ar/producto-new-ar.component';
import { ProductoEdiAdminRoutedComponent } from './component/application/producto/routed/admin/producto-edit-ar/producto-edit-ar.component';
import { ProductoRemoveAdminRoutedComponent } from './component/application/producto/routed/admin/producto-remove-ar/producto-remove-ar.component';
import { ProductoViewAdminRoutedComponent } from './component/application/producto/routed/admin/producto-view-ar/producto-view-ar.component';
import { UsuarioPlistRoutedComponent } from './component/application/usuario/routed/usuario-plist-routed/usuario-plist-routed.component';
import { UsuarioNewRoutedComponent } from './component/application/usuario/routed/usuario-new-routed/usuario-new-routed.component';
import { UsuarioEditRoutedComponent } from './component/application/usuario/routed/usuario-edit-routed/usuario-edit-routed.component';
import { UsuarioRemoveRoutedComponent } from './component/application/usuario/routed/usuario-remove-routed/usuario-remove-routed.component';
import { UsuarioViewRoutedComponent } from './component/application/usuario/routed/usuario-view-routed/usuario-view-routed.component';

import { CompraPlistAdminRoutedComponent } from './component/application/compra/routed/admin/compra-plist-ar/compra-plist-ar.component';
import { CompraNewAdminRoutedComponent } from './component/application/compra/routed/admin/compra-new-ar/compra-new-ar.component';
import { CompraEditAdminRoutedComponent } from './component/application/compra/routed/admin/compra-edit-ar/compra-edit-ar.component';
import { CompraViewAdminRoutedComponent } from './component/application/compra/routed/admin/compra-view-ar/compra-view-ar.component';
import { CompraRemoveAdminRoutedComponent } from './component/application/compra/routed/admin/compra-remove-ar/compra-remove-ar.component';
import { FacturaPlistAdminRoutedComponent } from './component/application/factura/routed/admin/factura-plist-ar/factura-plist-ar.component';
import { FacturaNewAdminRoutedComponent } from './component/application/factura/routed/admin/factura-new-ar/factura-new-ar.component';
import { FacturaRemoveAdminRoutedComponent } from './component/application/factura/routed/admin/factura-remove-ar/factura-remove-ar.component';
import { FacturaEditAdminRoutedComponent } from './component/application/factura/routed/admin/factura-edit-ar/factura-edit-ar.component';
import { CompraService } from './service/compra.service';
import { ProductoService } from './service/producto.service';
import { CarritoService } from './service/carrito.service';
import { UsuarioService } from './service/usuario.service';
import { TipousuarioService } from './service/tipousuario.service';
import { TipoproductoService } from './service/tipoproducto.service';
import { FacturaService } from './service/factura.service';
import { IconService } from './service/icon.service';
import { GenerateComponent } from './component/shared/routed/generate/generate.component';
import { GenerateService } from './service/generate.service';
import { CountService } from './service/count.service';
import { ReportsComponent } from './component/shared/routed/reports/reports.component';
import { UsuarioPlistUnroutedComponent } from './component/application/usuario/unrouted/usuario-plist-unrouted/usuario-plist-unrouted.component';
import { PopupComponent } from './component/shared/unrouted/popup/popup.component';
import { UsuarioViewUnroutedComponent } from './component/application/usuario/unrouted/usuario-view-unrouted/usuario-view-unrouted.component';
import { FileService } from './service/file.service';
import { PrePrintComponent } from './component/shared/unrouted/preprint/preprint.component';
import { TipoproductoPlistUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-plist-unrouted/tipoproducto-plist-unrouted.component';
import { ProductoPlistAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-plist-au/producto-plist-au.component';

import { FacturaPlistAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-plist-au/factura-plist-au.component';
import { TipousuarioPlistUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-plist-unrouted/tipousuario-plist-unrouted.component';
import { ProductoPlistUserUnroutedComponent } from './component/application/producto/unrouted/user/producto-plist-uu/producto-plist-uu.component';
import { ProductoPlistRowUnroutedComponent } from './component/application/producto/unrouted/admin/producto-plist-au/producto-plistrow-au/producto-plistrow-au.component';
import { ProductoPlistheaderUnroutedComponent } from './component/application/producto/unrouted/admin/producto-plist-au/producto-plistheader-au/producto-plistheader-au.component';
import { ProductoFormAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-form-au/producto-form-au.component';
import { ProductoDetailAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-detail-au/producto-detail-au.component';

import { findUnroutedComponent } from './component/shared/unrouted/find-unrouted/find-unrouted.component';
import { UsuarioFormUnroutedComponent } from './component/application/usuario/unrouted/usuario-form-unrouted/usuario-form-unrouted.component';
import { RppUnroutedComponent } from './component/shared/unrouted/rpp-unrouted/rpp-unrouted.component';
import { SearchUnroutedComponent } from './component/shared/unrouted/search-unrouted/search-unrouted.component';
import { PaginationUnroutedComponent } from './component/shared/unrouted/pagination-unrouted/pagination-unrouted.component';
import { PlistrowbuttonsUnroutedComponent } from './component/shared/unrouted/plistrowbuttons-unrouted/plistrowbuttons-unrouted.component';
import { UsuarioPlistheaderUnroutedComponent } from './component/application/usuario/unrouted/usuario-plistheader-unrouted/usuario-plistheader-unrouted.component';
import { UsuarioPlistRowUnroutedComponent } from './component/application/usuario/unrouted/usuario-plistrow-unrouted/usuario-plistrow-unrouted.component';
import { ViewbuttonsUnroutedComponent } from './component/shared/unrouted/viewbuttons-unrouted/viewbuttons-unrouted.component';
import { TipousuarioPlistheaderUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-plistheader-unrouted/tipousuario-plistheader-unrouted.component';
import { TipousuarioPlistRowUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-plistrow-unrouted/tipousuario-plistrow-unrouted.component';
import { TipoproductoPlistRowUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-plistrow-unrouted/tipoproducto-plistrow-unrouted.component';
import { TipoproductoPlistheaderUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-plistheader-unrouted/tipoproducto-plistheader-unrouted.component';
import { TipoproductoDetailUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-view-unrouted/tipoproducto-detail-unrouted.component';


import { TipousuarioViewUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-view-unrouted/tipousuario-view-unrouted.component';
import { TipousuarioFormUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-form-unrouted/tipousuario-form-unrouted.component';
import { ErrorHandlerService } from './service/errorHandler.service';
import { FacturaPlistheaderAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-plist-au/factura-plistheader-au/factura-plistheader-au.component';
import { FacturaPlistrowAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-plist-au/factura-plistrow-au/factura-plistrow-au.component';
import { FacturaDetailAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-detail-au/factura-detail-au.component';
import { FacturaViewAdminRoutedComponent } from './component/application/factura/routed/admin/factura-view-ar/factura-view-ar.component';
import { FacturaFormAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-form-au/factura-form-au.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TipoproductoFormUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-form-unrouted/tipoproducto-form-unrouted.component';
import { CompraPlistrowUnroutedComponent } from './component/application/compra/unrouted/admin/compra-plist-au/compra-plistrow-au/compra-plistrow-au.component';
import { CompraPlistheaderAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-plist-au/compra-plistheader-au/compra-plistheader-au.component';
import { CompraPlistAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-plist-au/compra-plist-au.component';
import { CompraDetailAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-detail-au/compra-detail-au.component';

import { CarritoDetailAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-detail-au/carrito-detail-au.component';


import { CompraFormAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-form-au/compra-form-au.component';
import { CarritoViewAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-view-ar/carrito-view-ar.component';
import { CarritoRemoveAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-remove-ar/carrito-remove-ar.component';
import { CarritoPlistAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-plist-au/carrito-plist-au.component';
import { CarritoPlistrowAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-plist-au/carrito-plistrow-au/carrito-plistrow-au.component';
import { CarritoPlistheaderAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-plist-au/carrito-plistheader-au/carrito-plistheader-au.component';
import { CarritoPlistAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-plist-ar/carrito-plist-ar.component';
import { CarritoFormAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-form-au/carrito-form-au.component';
import { CarritoNewAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-new-ar/carrito-new-ar.component';
import { CarritoEditAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-edit-ar/carrito-edit-ar.component';
import { BadgeModule } from 'primeng/badge';

// BLOQUE LOCALE
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ProductoDetailUserUnroutedComponent } from './component/application/producto/unrouted/user/producto-detail-uu/producto-detail-uu.component';
import { ProductoViewUserRoutedComponent } from './component/application/producto/routed/user/producto-view-ur/producto-view-ur.component';
import { CarritoPlistUserRoutedComponent } from './component/application/carrito/routed/user/carrito-plist-ur/carrito-plist-ur.component';
import { CarritoPlistUserUnroutedComponent } from './component/application/carrito/unrouted/user/carrito-plist-uu/carrito-plist-uu.component';
import { CarritoPlistheaderUserUnroutedComponent } from './component/application/carrito/unrouted/user/carrito-plist-uu/carrito-plistheader-uu/carrito-plistheader-uu.component';
import { CarritoPlistrowUserUnroutedComponent } from './component/application/carrito/unrouted/user/carrito-plist-uu/carrito-plistrow-uu/carrito-plistrow-uu.component';
import { UsuarioCViewRoutedComponent } from './component/application/usuario/routed/usuario-cview-routed/usuario-cview-routed.component';
import { UsuarioCDetailUnroutedComponent } from './component/application/usuario/unrouted/usuario-cdetail-unrouted copy/usuario-cdetail-unrouted.component';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    // shared unrouted
    ModalComponent,
    PopupComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PrePrintComponent,
    findUnroutedComponent,
    RppUnroutedComponent,
    SearchUnroutedComponent,
    PaginationUnroutedComponent,
    PlistrowbuttonsUnroutedComponent,
    ViewbuttonsUnroutedComponent,


    //
    // shared routed
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    GenerateComponent,
    ReportsComponent,
    // pipes
    TrimPipe,
    showDateTimePipe,
    showBooleanPipe,
    // Tipousuario routed components
    TipousuarioPlistRoutedComponent,
    TipousuarioViewRoutedComponent,
    TipousuarioEditRoutedComponent,
    // Usuario routed components
    UsuarioPlistRoutedComponent,
    UsuarioViewRoutedComponent,
    UsuarioNewRoutedComponent,
    UsuarioEditRoutedComponent,
    UsuarioRemoveRoutedComponent,
    UsuarioCViewRoutedComponent,
    // Tipoproducto routed components
    PlistTipoproductoComponent,
    TipoproductoNewRoutedComponent,
    TipoproductoViewRoutedComponent,
    TipoproductoEditRoutedComponent,
    TipoproductoRemoveRoutedComponent,
    // Producto routed components
    ProductoPlistAdminRoutedComponent,
    ProductoViewAdminRoutedComponent,
    ProductoNewAdminRoutedComponent,
    ProductoEdiAdminRoutedComponent,
    ProductoRemoveAdminRoutedComponent,
    ProductoViewUserRoutedComponent,
    // Compra routed components
    CompraPlistAdminRoutedComponent,
    CompraViewAdminRoutedComponent,
    CompraNewAdminRoutedComponent,
    CompraEditAdminRoutedComponent,
    CompraRemoveAdminRoutedComponent,
    // Factura routed components
    FacturaPlistAdminRoutedComponent,
    FacturaViewAdminRoutedComponent,
    FacturaNewAdminRoutedComponent,
    FacturaEditAdminRoutedComponent,
    FacturaRemoveAdminRoutedComponent,
    // Carrito routed components
    CarritoPlistAdminRoutedComponent,
    CarritoViewAdminRoutedComponent,
    CarritoRemoveAdminRoutedComponent,
    CarritoNewAdminRoutedComponent,
    CarritoEditAdminRoutedComponent,
    CarritoPlistUserRoutedComponent,
    



    //
    // unrouted components
    //

    // Usuario unrouted components
    UsuarioPlistUnroutedComponent,
    UsuarioViewUnroutedComponent,
    UsuarioFormUnroutedComponent,
    UsuarioPlistheaderUnroutedComponent,
    UsuarioPlistRowUnroutedComponent,
    UsuarioCDetailUnroutedComponent,

    // TipoUsuario unrouted components
    TipousuarioPlistUnroutedComponent,
    TipousuarioPlistheaderUnroutedComponent,
    TipousuarioPlistRowUnroutedComponent,
    TipousuarioViewUnroutedComponent,
    TipousuarioFormUnroutedComponent,

    // Producto unrouted components
    ProductoDetailAdminUnroutedComponent,
    ProductoFormAdminUnroutedComponent,
    ProductoPlistAdminUnroutedComponent,
    ProductoPlistheaderUnroutedComponent,
    ProductoPlistRowUnroutedComponent,
    ProductoPlistUserUnroutedComponent,
    ProductoDetailUserUnroutedComponent,

    // TipoProducto unrouted components
    TipoproductoPlistUnroutedComponent,
    TipoproductoPlistRowUnroutedComponent,
    TipoproductoPlistheaderUnroutedComponent,
    TipoproductoDetailUnroutedComponent,
    TipoproductoFormUnroutedComponent,

    // Factura unrouted components
    FacturaPlistAdminUnroutedComponent,
    FacturaPlistheaderAdminUnroutedComponent,
    FacturaPlistrowAdminUnroutedComponent,
    FacturaDetailAdminUnroutedComponent,
    FacturaFormAdminUnroutedComponent,

    // Compra unrouted components
    CompraPlistrowUnroutedComponent,
    CompraPlistheaderAdminUnroutedComponent,
    CompraPlistAdminUnroutedComponent,
    CompraDetailAdminUnroutedComponent,
    CompraFormAdminUnroutedComponent,

    // Carrito unrouted components
    CarritoDetailAdminUnroutedComponent,
    CarritoPlistAdminUnroutedComponent,
    CarritoPlistrowAdminUnroutedComponent,
    CarritoPlistheaderAdminUnroutedComponent,
    CarritoFormAdminUnroutedComponent,
    CarritoPlistUserUnroutedComponent,
    CarritoPlistheaderUserUnroutedComponent,
    CarritoPlistrowUserUnroutedComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    BadgeModule
  ],
  providers: [
    SessionService,
    SessionResolver,
    PaginationService,
    DateTimeService,
    CompraService,
    FacturaService,
    ProductoService,
    TipoproductoService,
    UsuarioService,
    TipousuarioService,
    CarritoService,
    IconService,
    GenerateService,
    CountService,
    FileService,
    ErrorHandlerService,
    { provide: LOCALE_ID, useValue: 'es-ES' } //USO DE LOCALE!!
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
