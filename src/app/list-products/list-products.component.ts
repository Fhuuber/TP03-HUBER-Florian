import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ListProductsService } from './list-products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  public products:Product[] = [];
  public productFilter:Product[] = [];
  public isEmpty:boolean = false;

  @Input() filter:String;

  constructor(public listProduct:ListProductsService) { }

  ngOnInit(): void {
    this.listProduct.getAll().subscribe(res=> {
      this.products = res;
      this.productFilter = res;
      console.log(this.products);
    });
  }

  search(filter:string) {
    this.filter = filter;
    this.isEmpty = false;
    this.productFilter = [];

    if (this.filter === "") {
      this.productFilter = this.products;
      return;
    } 

    for (let i = 0; i < this.products.length; i++)
    {
      if (this.products[i].name.toLowerCase().includes(this.filter.toLowerCase().trim())) {
        this.productFilter.push(this.products[i]);
      }
    }

    if (this.productFilter.length == 0)
    {
      this.isEmpty = true;
    }
  }
}
