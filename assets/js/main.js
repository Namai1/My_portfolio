/**
* Reset style
*/

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
:root{

}

* {
    margin: 0;
    padding:0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}
 



/****header****/

.header {
    display:flex;
}


.container__logo-title {
    position: relative;
    padding: 1rem;
}


.nav {
    margin-left: 20rem;
    padding: 2rem;
}


.nav__link {
    text-decoration: none;
    color: rgb(52, 74, 67);
    padding-left: 1.2rem;
    font-size:1.5rem;
    gap: 1.5rem;
    
}


.btn {
    font-weight: 500;
    padding: 12px 20px 10px 20px;
    background: #755151;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: .4s;
    
}
  

/****featured__box****/

.featured__box  {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    background: #86b4c8;
    
}



.featured__name {
    position: relative;
    margin: 1rem;
    padding: 0;

}

.featured__image {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-right: 7rem;
    flex-wrap: wrap;
}


.featured__image img {
    width: 20rem;
    height: auto;
    object-fit: cover;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin-left: 2rem;
    box-shadow: 0 10px 20px rgba(0,0,0,.2);
}


.featured__image p {
    font-size: 1.2rem;
    color: rgb(62, 57, 57);
    margin-right: 15rem;
    padding: 1rem;
    border: 1px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,.2);
    width: fit-content;
    background-color: #f0f0f0;
}


.featured__social-icons {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1rem;
}


.icon {
    width: 40px;
    height: 40px;
    background: #f0f0f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
}


/****about****/
.section {
    padding: 2rem;
    margin: 2rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    background: #86b4c8;
    box-shadow: 0 10px 20px rgba(0,0,0,.2);
    text-align: center;
}

.top__header {
    font-size: 2rem;
    margin-bottom: 1rem;
}   

.about__content {
    display: block;
    align-self: start;
    flex-wrap: wrap;
    
    
}

.about__text {
    font-size: 1.3rem;
    padding: 1rem;
    margin: 2rem;
    border: 2px ;
    box-shadow: 0 10px 20px rgba(0,0,0,.2);
    border-radius: 10px;
    background: #d6eef1;
    width: 70%;
  
}


.about__text h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}


.about__text p {
    letter-spacing: .3px;
    line-height: 1.5rem;
    text-align: justify;

}


.btn1 {
    font-weight: 500;
    padding: 12px 20px 10px 20px;
    color: white;
    background: #916c6c;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: .4s;
    
}


.about__buttons{
    text-align: left;
    margin-left: 5rem;
}

.project__container {
    display: flex;
    align-items: center;
    gap: 5rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 5rem;
}

h3 {
    font-size: 1.5rem;
}
.project1 {
    border: 4px solid black;
    border-radius: 10px;
    padding: 8%;
    background: #ccc;
}

.skill__box {
    align-items: center;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 5rem;
    
}


.skill_header {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}


ul {
    list-style-type: none;
    display: flex;
    gap: 3rem;
    font-size: 1.5rem;
    margin-left: 25rem;
    padding: 3rem;;
}

/***Contact box***/

.contact__info {
    text-align: left;
    font-size: 1.5rem;
}


h2 {
    font-size: 2rem;
}