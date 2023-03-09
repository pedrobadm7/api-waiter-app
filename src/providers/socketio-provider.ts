/* eslint-disable @typescript-eslint/no-explicit-any */
import { io } from '..';

export class SocketIoProvider {
  emit(eventName: string, ...args: any) {
    io.emit(eventName, ...args);
  }
}
