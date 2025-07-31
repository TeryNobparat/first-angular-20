import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exchange',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './exchange.html',
  styleUrls: ['./exchange.css'],
})
export class Exchange {
  inputAmount: number = 0;

  chips: Record<string, number> = {
    White: 100,
    Pink: 300,
    Red: 500,
    Blue: 1000,
    Green: 5000,
    Black: 10000,
  };

  cssChips: Record<string, string> = {
    White:
      'bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors',
    Pink: 'bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-ping-600 transition-colors',
    Red: 'bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors',
    Blue: 'bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors',
    Green:
      'bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors',
    Black:
      'bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors',
  };

  selectedChips: Record<string, number> = {
    White: 0,
    Pink: 0,
    Red: 0,
    Blue: 0,
    Green: 0,
    Black: 0,
  };

  chipColors(): string[] {
    return Object.keys(this.chips);
  }

  onExchange(): void {
    let amount = this.inputAmount;
    this.selectedChips = {
      White: 0,
      Pink: 0,
      Red: 0,
      Blue: 0,
      Green: 0,
      Black: 0,
    };
    const sorted = Object.entries(this.chips).sort((a, b) => b[1] - a[1]);
    for (const [color, value] of sorted) {
      while (amount >= value) {
        this.selectedChips[color]++;
        amount -= value;
      }
    }
  }
}
