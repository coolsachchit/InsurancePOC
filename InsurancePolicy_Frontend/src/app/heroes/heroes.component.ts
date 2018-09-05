import { Component, OnInit } from '@angular/core';
 
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService, private router: Router, private http: HttpClient) { }
 
 
  ngOnInit() {
    
  }

  CreatePolicy() {
  
  
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzYxOTE5NTQsInVzZXJuYW1lIjoiRFR1c2VyMSIsIm9yZ05hbWUiOiJPcmcxIiwiaWF0IjoxNTM2MTU1OTU0fQ.4GV46VecnEcSc95sXYL4TrImureL0n9_bscLMTLQ4rw' );
    this.http.post('http://192.168.33.10:4000/channels/mychannel/chaincodes/mycc' , {
      "peers": ["peer0.org1.example.com", "peer0.org2.example.com"],
	     "fcn":"createPolicy",
	    "args":"[Aadhar,name,Age,'Active',InsuranceCompany,InsuranceType,Salary,SumInsured,PolicyPrice,'New']"
    },{ headers: headers })
      .subscribe((res: any) => {
       console.log('success');
     
     });
    
    }
  

}
