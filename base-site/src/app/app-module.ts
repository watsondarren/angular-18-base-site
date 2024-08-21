// Modules
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { A11yModule, FocusMonitor } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { ScrollingModule, ViewportRuler } from '@angular/cdk/scrolling';
import { CdkTableModule, DataSource } from '@angular/cdk/table';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, InjectionToken, inject } from '@angular/core';
import {
    GoogleMap,
    MapBicyclingLayer,
    MapCircle,
    MapGroundOverlay,
    MapHeatmapLayer,
    MapInfoWindow,
    MapKmlLayer,
    MapMarker,
    MapMarkerClusterer,
    MapPolygon,
    MapPolyline,
    MapRectangle,
    MapTrafficLayer,
    MapTransitLayer,
    MapAdvancedMarker,
} from '@angular/google-maps';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatHeaderCell, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';
import { Observable, of as observableOf } from 'rxjs';

import { BaseComponent } from './component/general/base/base.component';
import { AComponent } from './component/general/a/a.component';
import { A2Component } from './component/general/a2/a2.component';
import { A3Component } from './component/general/a3/a3.component';
import { A4Component } from './component/general/a4/a4.component';
import { A5Component } from './component/general/a5/a5.component';
import { ButtonComponent } from './component/general/button/button.component';
import { Button10Component } from './component/general/button10/button10.component';
import { Button11Component } from './component/general/button11/button11.component';
import { Button12Component } from './component/general/button12/button12.component';
import { Button2Component } from './component/general/button2/button2.component';
import { Button3Component } from './component/general/button3/button3.component';
import { Button4Component } from './component/general/button4/button4.component';
import { Button5Component } from './component/general/button5/button5.component';
import { Button6Component } from './component/general/button6/button6.component';
import { Button7Component } from './component/general/button7/button7.component';
import { Button8Component } from './component/general/button8/button8.component';
import { Button9Component } from './component/general/button9/button9.component';
import { GoogleMapComponent } from './component/general/google-map/google-map.component';
import { MatActionListComponent } from './component/general/mat-action-list/mat-action-list.component';
import { MatAutocompleteComponent } from './component/general/mat-autocomplete/mat-autocomplete.component';
import { MatButtonToggleGroupComponent } from './component/general/mat-button-toggle-group/mat-button-toggle-group.component';
import { MatButtonToggleGroup2Component } from './component/general/mat-button-toggle-group2/mat-button-toggle-group2.component';
import { MatButtonToggleComponent } from './component/general/mat-button-toggle/mat-button-toggle.component';
import { MatCardComponent } from './component/general/mat-card/mat-card.component';
import { MatCard2Component } from './component/general/mat-card2/mat-card2.component';
import { MatCheckboxComponent } from './component/general/mat-checkbox/mat-checkbox.component';
import { MatCheckbox2Component } from './component/general/mat-checkbox2/mat-checkbox2.component';
import { MatCheckbox3Component } from './component/general/mat-checkbox3/mat-checkbox3.component';
import { MatCheckbox4Component } from './component/general/mat-checkbox4/mat-checkbox4.component';
import { MatCheckbox5Component } from './component/general/mat-checkbox5/mat-checkbox5.component';
import { MatChipListboxComponent } from './component/general/mat-chip-listbox/mat-chip-listbox.component';
import { MatChipSetComponent } from './component/general/mat-chip-set/mat-chip-set.component';
import { MatExpansionPanelComponent } from './component/general/mat-expansion-panel/mat-expansion-panel.component';
import { MatFormFieldComponent } from './component/general/mat-form-field/mat-form-field.component';
import { MatFormField10Component } from './component/general/mat-form-field10/mat-form-field10.component';
import { MatFormField11Component } from './component/general/mat-form-field11/mat-form-field11.component';
import { MatFormField12Component } from './component/general/mat-form-field12/mat-form-field12.component';
import { MatFormField13Component } from './component/general/mat-form-field13/mat-form-field13.component';
import { MatFormField14Component } from './component/general/mat-form-field14/mat-form-field14.component';
import { MatFormField15Component } from './component/general/mat-form-field15/mat-form-field15.component';
import { MatFormField16Component } from './component/general/mat-form-field16/mat-form-field16.component';
import { MatFormField2Component } from './component/general/mat-form-field2/mat-form-field2.component';
import { MatFormField3Component } from './component/general/mat-form-field3/mat-form-field3.component';
import { MatFormField4Component } from './component/general/mat-form-field4/mat-form-field4.component';
import { MatFormField5Component } from './component/general/mat-form-field5/mat-form-field5.component';
import { MatFormField6Component } from './component/general/mat-form-field6/mat-form-field6.component';
import { MatFormField7Component } from './component/general/mat-form-field7/mat-form-field7.component';
import { MatFormField8Component } from './component/general/mat-form-field8/mat-form-field8.component';
import { MatFormField9Component } from './component/general/mat-form-field9/mat-form-field9.component';
import { MatGridListComponent } from './component/general/mat-grid-list/mat-grid-list.component';
import { MatIconComponent } from './component/general/mat-icon/mat-icon.component';
import { MatListComponent } from './component/general/mat-list/mat-list.component';
import { MatNavListComponent } from './component/general/mat-nav-list/mat-nav-list.component';
import { MatPaginatorComponent } from './component/general/mat-paginator/mat-paginator.component';
import { MatProgressBarComponent } from './component/general/mat-progress-bar/mat-progress-bar.component';
import { MatProgressBar2Component } from './component/general/mat-progress-bar2/mat-progress-bar2.component';
import { MatProgressBar3Component } from './component/general/mat-progress-bar3/mat-progress-bar3.component';
import { MatProgressBar4Component } from './component/general/mat-progress-bar4/mat-progress-bar4.component';
import { MatProgressSpinnerComponent } from './component/general/mat-progress-spinner/mat-progress-spinner.component';
import { MatProgressSpinner2Component } from './component/general/mat-progress-spinner2/mat-progress-spinner2.component';
import { MatRadioButtonComponent } from './component/general/mat-radio-button/mat-radio-button.component';
import { MatRadioButton2Component } from './component/general/mat-radio-button2/mat-radio-button2.component';
import { MatRadioButton3Component } from './component/general/mat-radio-button3/mat-radio-button3.component';
import { MatRadioButton4Component } from './component/general/mat-radio-button4/mat-radio-button4.component';
import { MatRadioGroupComponent } from './component/general/mat-radio-group/mat-radio-group.component';
import { MatSelectionListComponent } from './component/general/mat-selection-list/mat-selection-list.component';
import { MatSelectionList2Component } from './component/general/mat-selection-list2/mat-selection-list2.component';
import { MatSidenavContainerComponent } from './component/general/mat-sidenav-container/mat-sidenav-container.component';
import { MatSlideToggleComponent } from './component/general/mat-slide-toggle/mat-slide-toggle.component';
import { MatSlideToggle2Component } from './component/general/mat-slide-toggle2/mat-slide-toggle2.component';
import { MatSlideToggle3Component } from './component/general/mat-slide-toggle3/mat-slide-toggle3.component';
import { MatSlideToggle4Component } from './component/general/mat-slide-toggle4/mat-slide-toggle4.component';
import { MatSliderComponent } from './component/general/mat-slider/mat-slider.component';
import { MatSlider2Component } from './component/general/mat-slider2/mat-slider2.component';
import { MatSlider3Component } from './component/general/mat-slider3/mat-slider3.component';
import { MatSpinnerComponent } from './component/general/mat-spinner/mat-spinner.component';
import { MatSpinner2Component } from './component/general/mat-spinner2/mat-spinner2.component';
import { MatStepperComponent } from './component/general/mat-stepper/mat-stepper.component';
import { MatStepper2Component } from './component/general/mat-stepper2/mat-stepper2.component';
import { MatStepper3Component } from './component/general/mat-stepper3/mat-stepper3.component';
import { MatTabGroupComponent } from './component/general/mat-tab-group/mat-tab-group.component';
import { MatTabNavPanelComponent } from './component/general/mat-tab-nav-panel/mat-tab-nav-panel.component';
import { MatTableComponent } from './component/general/mat-table/mat-table.component';
import { MatToolbarComponent } from './component/general/mat-toolbar/mat-toolbar.component';
import { MatToolbar2Component } from './component/general/mat-toolbar2/mat-toolbar2.component';
import { NavComponent } from './component/general/nav/nav.component';
import { TableComponent } from './component/general/table/table.component';
import { Table2Component } from './component/general/table2/table2.component';
import { TextareaComponent } from './component/general/textarea/textarea.component';
import { UlComponent } from './component/general/ul/ul.component';
import { YoutubePlayerComponent } from './component/general/youtube-player/youtube-player.component';
import { AppComponent } from './app.component';

const COMPONENTS = [
    MatListComponent, MatListModule, NavComponent, MatToolbarModule, MatHeaderCell, MatIcon, MatIconModule, CommonModule, MatIconComponent,
    BaseComponent,
    RouterOutlet,
    /* add modules here so Angular knows to use them */
    CommonModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSortModule,
    MatTableModule,
    MatStepperModule,
    ScrollingModule,

    // CDK Modules
    CdkListboxModule,
    CdkTableModule,
    DragDropModule,
    A11yModule,

    // Other modules
    YouTubePlayerModule,
    GoogleMap,
    MapBicyclingLayer,
    MapCircle,
    MapGroundOverlay,
    MapHeatmapLayer,
    MapInfoWindow,
    MapKmlLayer,
    MapMarker,
    MapAdvancedMarker,
    MapMarkerClusterer,
    MapPolygon,
    MapPolyline,
    MapRectangle,
    MapTrafficLayer,
    MapTransitLayer,
    MatFormFieldComponent,
    MatAutocompleteComponent,
    ButtonComponent,
    Button2Component,
    Button3Component,
    Button4Component,
    Button5Component,
    Button6Component,
    AComponent,
    A2Component,
    A3Component,
    A4Component,
    A5Component,
    MatButtonToggleGroupComponent,
    MatButtonToggleGroup2Component,
    MatButtonToggleComponent,
    MatCardComponent,
    MatCard2Component,
    MatCheckboxComponent,
    MatCheckbox2Component,
    MatCheckbox3Component,
    MatCheckbox4Component,
    MatCheckbox5Component,
    MatChipSetComponent,
    MatChipListboxComponent,
    MatFormField2Component,
    MatFormField3Component,
    Button7Component,
    MatGridListComponent,
    MatIconComponent,
    MatFormField4Component,
    MatFormField5Component,
    MatFormField6Component,
    MatFormField7Component,
    MatFormField8Component,
    MatFormField9Component,
    MatFormField10Component,
    MatFormField11Component,
    MatFormField12Component,
    MatFormField13Component,
    MatFormField14Component,
    MatFormField15Component,
    MatListComponent,
    MatNavListComponent,
    MatActionListComponent,
    MatSelectionListComponent,
    Button8Component,
    MatProgressBarComponent,
    MatProgressBar2Component,
    MatProgressBar3Component,
    MatProgressBar4Component,
    MatProgressSpinnerComponent,
    MatSpinnerComponent,
    MatProgressSpinner2Component,
    MatSpinner2Component,
    MatRadioGroupComponent,
    MatRadioButtonComponent,
    MatRadioButton2Component,
    MatRadioButton3Component,
    MatRadioButton4Component,
    MatFormField16Component,
    MatSidenavContainerComponent,
    MatSlideToggleComponent,
    MatSlideToggle2Component,
    MatSlideToggle3Component,
    MatSlideToggle4Component,
    MatSliderComponent,
    MatSlider2Component,
    MatSlider3Component,
    Button9Component,
    MatTabGroupComponent,
    NavComponent,
    MatTabNavPanelComponent,
    MatPaginatorComponent,
    MatToolbarComponent,
    MatToolbar2Component,
    TableComponent,
    Button10Component,
    TextareaComponent,
    MatExpansionPanelComponent,
    MatTableComponent,
    Table2Component,
    MatSelectionList2Component,
    MatStepperComponent,
    MatStepper2Component,
    MatStepper3Component,
    Button11Component,
    Button12Component,
    UlComponent,
    YoutubePlayerComponent,
    GoogleMapComponent,
    YouTubePlayer]

@NgModule({
    exports: COMPONENTS,
    imports: COMPONENTS,
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }