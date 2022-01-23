import './Footer.css';

//src:jsx attribute (camel case)
export function Footer(){
    return(
        <div>
        <footer class="w3-padding-64 w3-light-grey w3-small w3-center" id="footer">
  
    <div class="w3-row-padding">
      

      <div class="w3-col s4">
        <h4>About</h4>
        <p><a href="#">About us</a></p>
        <p><a href="#">Help</a></p>
      </div>

      <div class="w3-col s4 w3-justify">
        <h4>Store</h4>
        <p><i class="fa fa-fw fa-map-marker"></i> SAR Collections</p>
        <p><i class="fa fa-fw fa-phone"></i> 0044123123</p>
        <p><i class="fa fa-fw fa-envelope"></i> sar@gmail.com</p>
        <br/>
        <i class="fa fa-facebook-official w3-hover-opacity w3-large"></i>
        <i class="fa fa-instagram w3-hover-opacity w3-large"></i>
        <i class="fa fa-snapchat w3-hover-opacity w3-large"></i>
        <i class="fa fa-pinterest-p w3-hover-opacity w3-large"></i>
        <i class="fa fa-twitter w3-hover-opacity w3-large"></i>
        <i class="fa fa-linkedin w3-hover-opacity w3-large"></i>
      </div>
    </div>


        </footer>
        
        <div id="info">
        <a href="#">Other Link</a> <br></br>
&copy;SAR.com | Developed By Syed Abdur Rahaman
</div>

</div>
    );
}


