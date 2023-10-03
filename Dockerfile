FROM node:bullseye-slim

RUN npm install -g vsce typescript ts-node

CMD ["/bin/bash"]