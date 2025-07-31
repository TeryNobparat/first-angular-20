import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { send } from 'process';

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule, RouterLink],
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.css'],
})
export class Chatbot {
  me_message: string[] = ['hi', 'hello', 'hey', 'yo', 'what’s up', "what's up"];
  bot_message: string[] = [
    'How’s it going?',
    'Hi, how are you?',
    'How’s your day going?',
    'Having a busy day?',
    'How’s life?',
    'How’s everything?',
  ];

  chatHistory: { sender: 'me' | 'bot'; message: string }[] = [];

  addMessage(sender: 'me' | 'bot', message: string) {
    this.chatHistory.push({ sender, message });
  }

  sendMessage() {
    const meInput = document.getElementById('me_input') as HTMLInputElement;
    const meMessage = meInput.value.trim();
    if (this.me_message.includes(meMessage.toLowerCase())) {
      this.addMessage('me', meMessage);
      meInput.value = '';
      const randomIndex = Math.floor(Math.random() * this.bot_message.length);
      this.chatHistory.push({
        sender: 'bot',
        message: this.bot_message[randomIndex],
      });
    } else {
      this.addMessage('me', meMessage);
      meInput.value = '';
      this.chatHistory.push({
        sender: 'bot',
        message: "Sorry, I didn't understand that. Can you try again?",
      });
    }
  }
}
