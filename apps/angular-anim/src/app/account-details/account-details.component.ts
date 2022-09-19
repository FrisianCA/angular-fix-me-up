import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'libs/shared/services/src/lib/account';
import { AccountService } from 'libs/shared/services/src/lib/account.service';

@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent implements OnInit {

  accountInformation: Account = {} as Account;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    const accountID = String(this.activatedRoute.snapshot.paramMap.get('id'))

    this.accountService.getAccount(accountID).subscribe((account) => {
      if (account) {
        this.accountInformation = account;
      } else {
        this.router.navigate(['/']);
      }
    })

  }

}
