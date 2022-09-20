/** 
 * TODO: 10. Asynchronous Programming (RxJS)
 * TODO: 13. Angular (NX) Architecture
*/
import { Component, OnInit } from '@angular/core';
import { Account } from 'libs/shared/services/src/lib/account';
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sum-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent implements OnInit {

  accounts: Account[] = [];
  accountsFilter = '';
  filters: string[] = ["None", "USD", "CAD"];

  accountFilterForm: FormGroup = this.fb.group({
    accountType: ['accountType', [Validators.required]]
  })

  constructor(private accountService: AccountService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });

    this.accountFilterForm.controls['accountType'].setValue(this.filters[0]);
  }

  filterAccounts(accounts: Account[]) {
    return accounts.filter(acc => acc.currency === this.accountsFilter || this.accountsFilter === '');
  }

  filterType() {
    const currency = this.accountFilterForm.get('accountType')?.value.toLowerCase();
    if (currency !== "none") {
      this.accountsFilter = currency;
    } else {
      this.accountsFilter = '';
    }
  }
}
