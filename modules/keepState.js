// LocalStorage로 다크모드, 큰 글씨 유지하기
    const darkMode = localStorage.getItem("darkMode"); 
    if (darkMode === "false") { // 라이트 모드일 때
      document.body.classList.remove("dark-mode"); 
   } else { // 다크모드라면 
      document.body.classList.add("dark-mode"); // 다크모드 적용
    };
  
    const largerText = localStorage.getItem("largerText"); 
    if (largerText === "false") { // 글씨 크기 default 값이라면
      document.body.classList.remove("enlarged"); 
   }  
    else { // 글씨 크게 보기 적용중이라면
      document.body.classList.add("enlarged"); 
    };

    if(changeModeButton){
      if (darkMode === "false") { // 라이트 모드일 때
      changeModeButton.checked = false; 
   } else { // 다크모드라면 
      changeModeButton.checked = true; // 체크박스에 체크하기
    };
    } else {};
   
    if(largerTextButton){
      if (largerText === "false") { // 글씨 크기 default 값이라면
        largerTextButton.checked = false; 
     }  
      else { // 글씨 크게 보기 적용중이라면
        largerTextButton.checked = true; 
      };  
    }else {};
    
