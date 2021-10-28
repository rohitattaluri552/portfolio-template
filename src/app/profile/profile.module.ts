import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client/client.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { EducationComponent } from './education/education.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';
import { NgxSpinnerModule } from '../../../node_modules/ngx-spinner';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    // RouterModule.forChild([
    //   { 
    //     path: '',
    //     component: ProfileComponent,
    //     children: [
    //       {
    //         path: 'about',
    //         component: AboutComponent
    //       }
    //     ]
    //   }
    // ])
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    ClientComponent,
    PortfolioComponent,
    ServicesComponent,
    EducationComponent,
    ReferenceComponent,
    ContactComponent,
    ProjectsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  // exports: [
  //   FooterComponent,
  //   HeaderComponent
  // ],
  providers: [
    // { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    // SnotifyService,
  ]
})
export class ProfileModule { }
