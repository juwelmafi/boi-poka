import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)



const getWishStoredBook = ()=>{

const storedBookSTR = localStorage.getItem("wishList");
  if(storedBookSTR){
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;

  }
    else{
      return [];
    }
}


const addToWishStoredDB = (id)=>{

const storedBookData = getWishStoredBook();
if(storedBookData.includes(id)){
  Swal.fire({
        title: "Opps!",
        text: "Already Exist",
        icon: "error"
      });
}else{
  storedBookData.push(id);
  const data = JSON.stringify(storedBookData);
  localStorage.setItem("wishList", data)
}
  
}

export {addToWishStoredDB, getWishStoredBook};