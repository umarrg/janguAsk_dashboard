import 'dart:io';
main(List<String> args) {
  print('OS: ${Platform.operatingSystem} ${Platform.version}');

  if(Platform.isWindows){
    print('Run ');
    
  }else {
    print('run normal');
  }
  
}