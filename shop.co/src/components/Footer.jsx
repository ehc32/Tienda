import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import PaymentsLogos from "./PaymentsLogos";


export default function Footer() {
  return (
    <div className="mainMargin">
      <div className="flex flex-wrap justify-between items-center p-10 bg-black mt-10 rounded-3xl">
        <div className="bolded text-3xl xsm:text-4xl text-white mb-10 max-w-[600px]">FRESH FROM THE OVEN — JOIN OUR NEWSLETTER</div>
        <form className="flex flex-col gap-5 flex-grow" action="">
          <div className="rounded-3xl bg-white p-2 flex w-full">
            <MdOutlineEmail size={25}/>
            <input className=" text-black outline-none ml-2 w-full" placeholder="Enter your email address"/>
          </div>
          <button type="submit" className="rounded-3xl bg-white p-2 text-black text-center">Subscribe to Newsletter</button>
        </form>
      </div>
      <footer>
        <div className="flex flex-wrap justify-between mt-10 gap-10">
          <div className="flex-grow flex flex-col gap-10">
            <h1 className="bolded text-3xl">MAXIPAN</h1>
            <p className="max-w-72">Panadería y pastelería artesanal. Panes, pasteles, empanadas y más, horneados todo el día.</p>
            <div className="flex gap-5">
              <FaXTwitter size={25}/>
              <FaFacebook size={25}/>
              <FaInstagram size={25}/>
              <FaGithub size={25}/>
            </div>
          </div>
          <div className="flex-grow flex gap-5 flex-col justify-center items-center">
            <h1 className="font-semibold -ml-20">Company</h1>
            <ul className="flex flex-col gap-5">
              <li className="Links">About</li>
              <li className="Links">Our Bakeries</li>
              <li className="Links">Works</li>
              <li className="Links">Career</li>
            </ul>
          </div>
          <div className="flex-grow flex gap-5 flex-col justify-center items-center">
            <h1 className="font-semibold -ml-24">Help</h1>
            <ul className="flex flex-col gap-5">
              <li className="Links">Customer Support</li>
              <li className="Links">Delivery Details</li>
              <li className="Links">Terms & Conditions</li>
              <li className="Links">Privacy Policy</li>
            </ul>
          </div>
          <div className="flex-grow flex gap-5 flex-col justify-center items-center">
            <h1 className="font-semibold -ml-24">FAQ</h1>
            <ul className="flex flex-col gap-5">
              <li className="Links">Account</li>
              <li className="Links">Manage Deliveries</li>
              <li className="Links">Orders</li>
              <li className="Links">Payments</li>
            </ul>
          </div>
          <div className="flex-grow flex gap-5 flex-col justify-center items-center"> 
            <h1 className="font-semibold -ml-20">Resources</h1>
            <ul className="flex flex-col gap-5">
              <li className="Links">Catering & Events</li>
              <li className="Links">Allergens & Nutrition</li>
              <li className="Links">Wholesale</li>
              <li className="Links">Press</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-10 gap-y-5 border-t-4 items-center flex-wrap">
          <div className="flex-grow text-center md:text-left">
            Maxipan © 2000-2024, All Rights Reserved
          </div>
          <div className="w-fit">
            <PaymentsLogos/>
          </div>
        </div>
      </footer>
    </div>
  )
}
