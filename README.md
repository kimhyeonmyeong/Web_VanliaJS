# VanliaJS
get Weather info, time, and background image (basic)



웹에 관해서, 그 중에서도 VanliaJs에 대해서 공부하고 강의들을 수강한뒤, 최종 실습 파트 부분에서 만든 코드입니다.

https://kimsmartblog.tistory.com/

블로그 Web 파트 - VanliaJs에 기능별로 정리되어있습니다.


## 강의 제목 및 출처
https://nomadcoders.co/javascript-for-beginners

Web front, backend Full stack Nomad 선생님

## 목차

![image](https://user-images.githubusercontent.com/44837403/114271546-df54ca00-9a4c-11eb-97ad-5c9c9071c195.png)
![image](https://user-images.githubusercontent.com/44837403/114271548-e4197e00-9a4c-11eb-838d-bf1d0272e49d.png)
![image](https://user-images.githubusercontent.com/44837403/114271555-e8de3200-9a4c-11eb-9431-3cee3fa2c515.png)


## 진행 기간
2020-07-8 ~ 2020-07-15

## 프로그램 기능

#### Html, css, Vanlia JS기반 todolist 기능
![image](https://user-images.githubusercontent.com/44837403/114271437-4f168500-9a4c-11eb-8bc8-f4d8bf72cf1e.png)
![image](https://user-images.githubusercontent.com/44837403/114271447-5a69b080-9a4c-11eb-9955-d01a91d076c3.png)
![image](https://user-images.githubusercontent.com/44837403/114271452-635a8200-9a4c-11eb-9133-487ac2bb8d54.png)


- insert

  제일 처음 init()가 실행되고 loadName 발생. localStorage에서 저장된 currentUser값을 읽어보고 null값이면 이름을 입력받는다.
 null 이 아니면 그대로 paintGreeting실행. askforName은 form이 submit이벤트를 발생시킬 때 함수를 실행해 입력을 받게 한다. 이벤트 함수는 form에 입력되는 값을 const로 저장한뒤 paintGreeting과 saveName에 인자를 보내준다.
 그러면 paintGreeting에서 입력된 이름을 통해 문자열을 출력하고 saveName에서는 localStorage에 사용자 입력을 저장한다.

- store

  loadToDos를 활용. 처음에 ui들이 웹에 기록이 되면서, 동시에 localStorage에 toDos라는 배열을 이용해서 저장을 해줌.
이 때 저장하는 방식은 object를 활용해 저장을 한다. Object: toDoObj : text와 id를 설정해주어서 저장을 한다. (toDos.push(toDoObj)를 활용)
단, 저장할때 자바스크립트는 String형태로만 저장되어야 보여줄 수 있기 때문에 JSON.stringify(toDos)를 활용해서 String형태로 저장을 한다.
 이렇게 localStorage에 저장된 toDos는 loadToDos에서 불러들이고 JSON.parse(loadedToDos)를 통해 object를 가지는 배열로 변환한 후 forEach(fuction(toDo){ paintTodo(toDo.text)})를 이용해서 array안에 있는 object들이 가지는 text를 일일히 화면에 출력하게 한다.
이러면 새로고침해도 표시가 된다.
 
- delete

  지우기 기능을 위해서 button을 눌렀을 경우 이벤트 함수를 발생시킨다. deleteToDo함수는 리스트의 li들을 지우기 위해서 event.target을 사용, btn을 지칭한다. 어떤 btn인지 알기 위해 console.dir(event.target)을 통해 해당 버튼의 parentNode를 알아낸다.
event.target은 btn으로 btn.parentNode는 li 상수로 저장한다.
그 다음 HTML의 toDoList의 Element를 지우기 위해서 toDoList.removeChild(li)를 사용한다. 이렇게 하면 화면에서는 지워진다.
 이제는 localStorage에서 해당 li를 지워야 한다. 그렇게 하기 위해서 const cleanToDos = toDos.filter(function(toDo){ return 
toDos.id !== li.id})를 사용해서 새로운 toDos를 만들어준다. 이 때 배열 중에서 조건이 맞는 항목들만을 다시 배열로 만들어주는 filter 함수를 사용해준다. 이는 forEach함수와 더불어 중요한 함수이다. 이렇게 저장된 cleanToDos는 toDos에 넣어준 후 saveToDos를 한번 더 실행해준다. 그러면 깔끔히 지워지게 된다.



#### 배경이미지 설정 기능

![image](https://user-images.githubusercontent.com/44837403/114271463-71a89e00-9a4c-11eb-9297-51dd95f655a4.png)

 랜덤숫자를 생성한다. floor를 이용해서 버림을 해 정수값으로 랜덤숫자를 반환함. 이 숫자로 이미지 번호에 연동시켜 랜덤한 이미지들이 화면에 뜨게 하였다.
이미지가 화면에 어떻게 뜨는지는 classList를 통해서 bgImage class를 만들어주고 css에서 bhImage를 설정해서 조절해준다. z-index는 form이나 기존 HTML에 있던것들 뒤로 배경이미지가 보이도록 하는 것이다. 추가적으로 animation을 넣어주었다.

#### 날씨API를 받아와서 웹 화면에 보여주는 기능
![image](https://user-images.githubusercontent.com/44837403/114271491-94d34d80-9a4c-11eb-9c83-02a3493be0ed.png)
![image](https://user-images.githubusercontent.com/44837403/114271516-a7e61d80-9a4c-11eb-8567-c3d6009eec8a.png)


 지금 컴퓨터를 쓰고 있는 지역의 날씨를 넣어주기 위해서 위도와 경도 값을 알아야 합니다.
그래서 loadCorrds 함수를 만들어주고, 그 후 askForCoords로 좌표를 얻게 합니다. 이때 navigator 를 사용을 했습니다.
navigator.geolocation.getCurrentPosition(success,error)를 통해서 위도와 경도 값을 입력받습니다.
성공하면 success를, 실패하면 error를 실행합니다. success는 position값을 리턴 받습니다.
position의 latitude와 longitude를 활용합니다. 이 값을 coordsObj 오브젝트에 넣어줍니다. 이 오브젝트는 saveCoords를 통해 localStorage에 저장되고 getWeather를 실행합니다.
 getWeather에서는 Weather API를 사용합니다. API는 웹에서 제공하는 JSON데이터 형태로 자바스크립트에서 데이터를 받아와 사용할 수 있게 합니다.
 이때 해당 API에서 제공하는 형식에 맞게 위도와 경도 API_KEY를 입력을 합니다. 그리고 fetch를 통해서 데이터를 받아오는데, 데이터가 받는 걸 기다리기 위해 then을 사용을 합니다. 이 때 1차 오는 데이터는 원하는 날씨값이 없어서 한번 더 then을 사용하고 JSON형태로 데이터를 받습니다.이 JSON에서 지역이름과 온도값을 상수로 받은 뒤 <span>weather에 innertext로 이 값들을 출력합니다.

출력 화면 
![image](https://user-images.githubusercontent.com/44837403/114271533-c5b38280-9a4c-11eb-98c0-53f28d7eb6fa.png)



## 느낀점

 학교수업 이외에는 모바일이나 웹에 대해서 만들어본 경험이 없었습니다. 실질적으로 공부도 하고 의미있는 서비스를 만들고 싶다는 생각이 들었습니다.
당시 저는 인공지능 및 모바일 앱에 관심이 많았는데 알아보던 중, 어플을 만드는 방법에 웹기술을 이용해서 만드는 하이브리드 방식이 있다는 것을
알게 되었습니다. React Native, 또는 Flutter를 이용해서 만드는 것이였는데 한 플랫폼의 구현으로 안드로이드와 ios 모두 서비스 가능하다는 점이
매력적으로 다가왔습니다.
 그래서 관련 강의를 찾아보게 되었고 React Native앱을 만들기 위해서는 기본적으로 JavaScript, React, ReactNative, Graph, Apollo에 대해서 먼저 공부하는 것을 추천받았습니다. 이 공부는 그 중, JavaScrpit에 기본이 되는 VanliaJs에 대한 내용으로 웹에서 화면이 어떻게 구성이
되고 Dynamic한 Event들에 따라서 어떤식으로 구성을 하면 좋을지에 대해서 배울 수 있었습니다.
처음 의도는 모바일 앱을 만들기 위해 시작했지만
웹에 대해서 공부도 하고 시야가 넓어지는 것 같아 보람을 느꼈습니다.






