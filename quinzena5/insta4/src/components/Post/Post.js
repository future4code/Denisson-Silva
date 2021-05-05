import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeMarcar from '../../img/bookmark.svg'
import iconeMarcarPreto from '../../img/bookmark_black.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`


const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    numeroDescurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false
  }

  onClickCurtida = () => {
    this.setState({
      curtido: true,
      numeroCurtidas: this.state.numeroCurtidas + 1
    })
    
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }
  
  onClickMarcar = () => {
    this.setState({
      marcado: true
      
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeMarcado

    if(this.state.marcado) {
      iconeMarcado = iconeMarcarPreto
    } else {
      iconeMarcado = iconeMarcar
    }

    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoBranco
    } else {
      iconeCurtida = iconeCoracaoPreto
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>

        <UserPhoto src={iconeMarcado} alt={'icone marcar'}
        onClick={this.onClickMarcar}/>
        
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
          
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post