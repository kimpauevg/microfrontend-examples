Для работы с каждым из приложений, команды нужно выполнять находясь в папке этого приложения.

### bit

Предварительно необходимо глобально установить bit
```
npm install --global @teambit/bvm
```

Установка зависимостей
```
bit install
```

В консоли где будет запускаться сервер необходимо выполнить  
``` 
export NODE_OPTIONS=--openssl-legacy-provider 
``` 

Запуск главного приложения

```
bit run main
```

Запуск микрофронтенда 

```
bit run about
```

### nx

Предварительно необходимо глобально установить nx
```
npm install --global nx@latest
```

Установка зависимостей
```
nx install
```

Запуск приложений
```
nx run-many --parallel --target=serve --projects=main,about --maxParallel=100
```

### rush
Предварительно необходимо глобально установить rush
```
npm install --global @microsoft/rush
```

Установка зависимостей
```
rush install
```

Запуск приложений
```
cd main && npm start
cd about && npm start
```

