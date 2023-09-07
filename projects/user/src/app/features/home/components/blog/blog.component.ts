import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  show= true;
  urlSegments: any;

  constructor(private title: Title, private acRoute: ActivatedRoute){
    this.show = false
    this.urlSegments = this.acRoute.snapshot.url[0]?.path
    if(this.urlSegments == 'blog'){
      this.title.setTitle('Blog')
    }
  }


  blogs = [
    {
      url: '../../../../../../assets/blog-1.cc46c677.png',
      title:'Security Must be top priority in bringing critical insfrastructure online',
      description: `Sed mauris Pellentesque elit Aliquam at lacus interdum nascetur elit ipsum. Enim ipsum hendrerit turpis laoreet fames tempus ligula pede ac. Et Lorem penatibus orci eu ultrices egestas Nam quam Vivamus nibh.Odio ut pretium ligula quam Vestibulum consequat convallis fringilla Vestibulum nulla. Accumsan morbi tristique auctor.`
    },
    {
      url: '../../../../../../assets/blog-2.5237b83c.png',
      title:'Remote Collaboration, Digital Twins, and the Metaverse',
      description: `Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl Urna pretium elit mauris cursus Curabitur at elit Vestibulum Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.`
    },
    {
      url: '../../../../../../assets/blog-3.eca45a6f.png',
      title:'Our Kit Close-up video series highlights some of the latest development',
      description: `Turpis at eleifend ps mi elit Aenean porta ac sed faucibus. Nunc urna Morbi fringilla vitae orci convallis condimentum auctor sit dui. Urna pretium elit mauris cursus Curabitur at elit Vestibulum Odio ut pretium ligula quam Vestibulum consequat convallis .`
    },
    {
      url: '../../../../../../assets/blog-4.bd04527d.png',
      title:'There’s another wireless technology choice for IoT long-range applications',
      description: `Donec tellus Nulla lorem Nullam elit id ut elit feugiat lacus. Congue eget dapibus congue tincidunt senectus nibh risus Phasellus tristique justo. Justo Pellentesque Donec lobortis faucibus Donec tellus Nulla lorem Nullam elit id ut elit feugiat lacus. `
    },
    {
      url: '../../../../../../assets/blog-5.ebdaa6dd.png',
      title:'The Complexities of Electronic Design and Scheduling',
      description: `Home Blog There’s another wireless technology choice for IoT long-range applications There’s another wireless technology choice for IoT long-range applications 03 JUN, 2022 There’s another wirelesstechnology choice for IoT long-range applications Donec tellus Nulla lorem Nullam elit id ut elit feugiat lacus.`
    },
    {
      url: '../../../../../../assets/blog-6.b25e834a.png',
      title:'Embedded Forecast Better Hardware, Suspect Software',
      description: `Mi vitae magnis Fusce laoreet nibh felis porttitor laoreet Vestibulum faucibus.At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitassevelit Vestibulum tincidunt In. Turpis at eleifend ps mi elit Aenean porta ac sed faucibus. Nunc urna Morbi fringilla vitae.`
    },
]
}
