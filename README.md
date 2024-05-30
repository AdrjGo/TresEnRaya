# Tres en Raya

Este proyecto implementa un juego de tres en raya (tic-tac-toe) utilizando HTML, CSS y JavaScript. 

## Descripción del Código

El código principal de este proyecto maneja la lógica del juego de tres en raya cuando se hace clic en una de las casillas del tablero. A continuación, se proporciona una descripción de las funciones principales y las variables utilizadas.

### Funciones Principales

#### `boxClicked(e)`

Esta función se ejecuta cuando se hace clic en una casilla del tablero. Realiza las siguientes acciones:

1. Obtiene el `id` del elemento clicado.
2. Verifica si la casilla está vacía.
3. Marca la casilla con el símbolo del jugador actual (`X` o `O`).
4. Verifica si el jugador actual ha ganado.
   - Si hay un ganador, muestra un mensaje de victoria y resalta las casillas ganadoras.
   - Si no hay ganador, alterna al siguiente jugador.

#### `switchPlayer()`

Esta función alterna entre los jugadores `X` y `O`.

#### `highlightWin(winningBlocks)`

Esta función resalta las casillas ganadoras cambiando su color de fondo. Recibe como argumento un array con los índices de las casillas ganadoras.

### Variables Principales

- `spaces`: Almacena el estado del tablero. Cada índice corresponde a una casilla del tablero.
- `currentPlayer`: Almacena el símbolo del jugador actual (`X` o `O`).
- `playerText`: Elemento HTML que muestra mensajes para los jugadores, como quién ha ganado.
- `winnerIndicator`: Almacena el color que se utilizará para resaltar las casillas ganadoras.
- `boxes`: Almacena las referencias a todas las casillas del tablero del juego.
