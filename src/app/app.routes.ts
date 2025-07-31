import { Routes } from '@angular/router';
import { SignUpComponent } from './pages/auth/sign-up-component/sign-up-component';
import { SignInComponent } from './pages/auth/sign-in-component/sign-in-component';
import { HomeComponent } from './pages/home-component/home-component';
import { Chatbot } from './pages/chatbot/chatbot';
import { Exchange } from './exchange/exchange';

export const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'chatbot', component: Chatbot },
  { path: 'exchange', component: Exchange },
  { path: '**', redirectTo: 'sign-in' },
];
