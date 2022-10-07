import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({ providedIn: 'platform' })
export class UtilService {
  constructor(private sanitizer: DomSanitizer) {
  }

  getSafeUrl(url?: string) {
    if (!url) {
      return '';
    };

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}