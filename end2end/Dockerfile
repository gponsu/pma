FROM cypress/base

WORKDIR /usr/local/end2end
RUN npm install -g cypress --unsafe-perm=true

COPY . .

RUN cypress verify
CMD ["cypress", "run"]
