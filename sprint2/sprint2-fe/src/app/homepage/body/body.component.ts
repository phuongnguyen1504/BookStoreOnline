import { Component, OnInit } from '@angular/core';
import {Slick} from 'ngx-slickjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  banner = ['http://static.nhanam.com.vn/thumb/0x0/crop/Features/Images/2019/4/25/6HHNAJ7E.jpg', 'http://static.nhanam.com.vn/thumb/0x0/crop/Features/Images/2018/9/13/3XSUDF44.jpg', 'http://static.nhanam.com.vn/thumb/0x0/crop/Features/Images/2018/9/13/OJ4M48Q3.jpg'];
  config: Slick.Config = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    dots: true,
    speed: 4000,
    autoplaySpeed: 1000,
    autoplay: true,
    arrows: true,
    prevArrow: '<span class="slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
    nextArrow: '<span class="slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
