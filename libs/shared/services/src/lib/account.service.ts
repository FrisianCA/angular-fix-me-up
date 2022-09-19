import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public accounts: Account[] = [
    { id: "1234", balance: 7500, currency: "cad" },
    { id: "1235", balance: 4500, currency: "cad" },
    { id: "1236", balance: 2102, currency: "usd" },
  ]

  getAccounts(): Observable<Account[]> {
    return of(this.accounts);
  }

  getAccount(accountID: string): Observable<Account | undefined> {
    const filteredAccount: Account | undefined = this.accounts.find(account => account.id === accountID);

    return of(filteredAccount);
  }
}
