import 'dart:io';
main(List<String> args) {
  print('OS: ${Platform.operatingSystem} ${Platform.version}');

  if(Platform.is){
    print('Run normal code');
    
  }else {
    print('run normal');
  }
  
}