import React from 'react'
import "./Footer.css"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import headerLogo from "../../assets/headerLogo.png";

function Footer() {
  return (
    <div className='footer'>
        <div className="top_footer">
            <div className="left">
                <h3>Bizning mobil ilovamiz AppGallery, App <br /> store va Google play-da</h3>
                <div className='dsf'>
                    <div><img src="https://olcha.uz/_nuxt/appstore.BZyLL41o.svg" alt="" /></div>
                    <div><img src="https://olcha.uz/_nuxt/googleplay.CcPmyygm.svg" alt="" /></div>
                </div>
                <div className='third'><img src="https://olcha.uz/_nuxt/app-gallery.5qhZx5qb.svg" alt="" /></div>
            </div>
            <div className="right">
                <img src="https://olcha.uz/_nuxt/footer-img.CkueetuY.webp" alt="" />
            </div>
        </div>
        <div className="bottom_footer">
            <div className="first">
                <img src={headerLogo} alt="" />
                <span>Qo'llab-quvvatlash raqami</span>
                <span>+998 (71) 202 202 1</span>
                <span><CiLocationOn /> Qozitarnov, Toshkent</span>
                <span><MdOutlineMailOutline />  info@olcha.uz</span>
            </div>
            <div className="second">
                <p>Ma'lumot</p>
                <span>Biz haqimizda</span>
                <span>Bo'sh ish o'rinlari</span>
                <span>Ommaviy iferta</span>
                <span>To‘lovni qaytarish va tovarlarni <br /> almashtirish
                </span>
                <span>Muddatli to’lov shartlari</span>
            </div>
            <div className="third">
                <span>Eco-friendly</span>
                <span>
                Shaxsiy ma‘lumotlar bilan ishlash bo‘yicha Siyosat</span>
                <span>
                To‘lov va yetkazib berish</span>
                <span>Bonus va aksiyalar</span>
                <span>Mahsulotlarni Olcha.uz da <br /> sotmoqchi bo’lgan sotuvchilar <br /> uchun oferta.</span>
            </div>
            <div className="last">
                <div className="last_contain">
                    <div className="div"><img src="https://olcha.uz/_nuxt/uzumbank.BHyRM-1y.svg" alt="" /></div>
                    <div className="div"><img src="data:image/svg+xml,%3csvg%20data-v-15cbe975=''%20xmlns='http://www.w3.org/2000/svg'%20width='130'%20height='46'%20fill='%231F3E79'%20class=''%3e%3cpath%20data-v-15cbe975=''%20d='M54.318%2034.482V11.95h9.58c1.485%200%202.843.344%204.073%201.03a7.87%207.87%200%20012.992%202.865c.742%201.202%201.114%202.597%201.114%204.185%200%201.587-.372%203.004-1.114%204.248a7.939%207.939%200%2001-2.96%202.865c-1.23.687-2.6%201.03-4.105%201.03h-4.233v6.309h-5.347zm5.347-10.847h3.628c.636%200%201.21-.14%201.718-.419.51-.279.924-.687%201.242-1.223.318-.536.477-1.18.477-1.931%200-.751-.16-1.395-.477-1.932a3.186%203.186%200%2000-1.273-1.223c-.51-.3-1.072-.45-1.687-.45h-3.628v7.178zm15.039%2010.847V10.985h4.933v23.497h-4.933zm16.725.386c-1.677%200-3.13-.322-4.36-.965-1.21-.666-2.143-1.556-2.801-2.672-.658-1.137-.986-2.393-.986-3.766V17.97h4.932v9.366c0%20.58.138%201.116.414%201.61.276.472.647.858%201.114%201.159.488.278%201.04.418%201.655.418.594%200%201.124-.14%201.59-.418.489-.301.87-.687%201.147-1.16.275-.493.413-1.03.413-1.609V17.97h4.933v9.495c0%201.373-.318%202.629-.955%203.766-.636%201.116-1.56%202.006-2.768%202.672-1.189.643-2.631.965-4.329.965zm11.743-.386v-9.753c0-1.352.307-2.564.923-3.637.636-1.095%201.538-1.953%202.705-2.575%201.167-.623%202.556-.934%204.169-.934.806%200%201.549.097%202.227.29a7.08%207.08%200%20011.846.74%205.47%205.47%200%20011.464%201.095h.064c.424-.43.912-.794%201.464-1.095a7.63%207.63%200%20011.877-.74%208.479%208.479%200%20012.26-.29c1.612%200%203.002.311%204.169.934%201.167.622%202.069%201.48%202.705%202.575.637%201.073.955%202.285.955%203.637v9.753h-4.965V24.89a2.62%202.62%200%2000-.414-1.448%203.027%203.027%200%2000-1.05-1.095%202.814%202.814%200%2000-1.527-.418c-.573%200-1.093.14-1.56.418a3.043%203.043%200%2000-1.05%201.095%202.78%202.78%200%2000-.382%201.448v9.592h-4.933V24.89c0-.537-.138-1.02-.413-1.448a2.966%202.966%200%2000-1.082-1.095%202.82%202.82%200%2000-1.528-.418c-.573%200-1.093.14-1.559.418a3.038%203.038%200%2000-1.051%201.095%202.79%202.79%200%2000-.381%201.448v9.592h-4.933z'%3e%3c/path%3e%3cpath%20data-v-15cbe975=''%20d='M36.857.003H8.62C3.86.003%200%203.907%200%208.722v28.56C0%2042.095%203.86%2046%208.62%2046h28.237c4.76%200%208.62-3.904%208.62-8.719V8.721c0-4.814-3.86-8.718-8.62-8.718z'%20fill='%232792FC'%3e%3c/path%3e%3cmask%20data-v-15cbe975=''%20id='a'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='46'%20height='46'%20style='mask-type:%20alpha;'%3e%3cpath%20data-v-15cbe975=''%20d='M36.951%200H8.714C3.954%200%20.094%203.904.094%208.719v28.56c0%204.814%203.86%208.718%208.62%208.718h28.237c4.761%200%208.62-3.904%208.62-8.719V8.718c0-4.814-3.859-8.718-8.62-8.718z'%20fill='%232792FC'%3e%3c/path%3e%3c/mask%3e%3cg%20data-v-15cbe975=''%20mask='url(%23a)'%3e%3cpath%20data-v-15cbe975=''%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.046%2022.294C4.93%2030.155%202.274%2039.174.83%2044.873l6.03%201.563c1.394-5.503%203.86-13.785%207.525-20.884%2011.748%206.28%2020.75%204.982%2025.304-.754%204.544-5.725%203.19-15.195-4.988-17.915-5.394-1.795-10.258-.838-14.384%201.792-3.143%202.005-5.805%204.94-8.053%208.221a76.716%2076.716%200%2001-5.244-3.974l-3.93%204.882a82.244%2082.244%200%20005.956%204.491zm8.559-2.136c10.273%205.431%2015.457%202.93%2017.23.697%202.293-2.888%201.284-6.874-2.079-7.993-3.48-1.157-6.425-.58-9.119%201.138-2.143%201.366-4.162%203.488-6.032%206.158z'%20fill='%23E9FFF2'%3e%3c/path%3e%3c/g%3e%3c/svg%3e" alt="" /></div>
                    <div className="div"><img src="https://olcha.uz/_nuxt/click.ByhH4ulA.svg" alt="" /></div>
                </div>
                <div className="last_contain">
                    <div className="div"><img src="https://olcha.uz/_nuxt/payme.DLp2GdHd.svg" alt="" /></div>
                    <div className="div"><img src="https://olcha.uz/_nuxt/humo-bg.B29viszN.svg" alt="" /></div>
                    <div className="div"><img src="https://olcha.uz/_nuxt/paynet.C8TMfSoa.svg" alt="" /></div>
                </div>
            </div>
        </div>
        <div className="the_last">
            <div className="title">
                <p>2017-2024. 000 "Olcha store"</p>
                <p>Omaviy oferta</p>
                <p>Maxfiylik siyosati</p>
            </div>
            <div className="svg_container">
                <FaFacebook/>
                <IoLogoInstagram />
                <FaTelegramPlane />
            </div>
        </div>
    </div>
  )
}

export default Footer