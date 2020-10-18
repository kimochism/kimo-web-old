<template>
    <div id="modal-content">
        <Overlay @click="destroy()" />
        <Modal>
            <Header v-if="$slots.title">
                <span class="title">
                    <slot name="title"></slot>
                </span>
                <span class="material-icons"  @click="destroy()">close</span>
            </Header>
            <Content>
                <span 
                    class="material-icons"  
                    @click="destroy()"
                    v-if="!$slots.title"
                    >
                        close
                </span>
                <slot name="content"></slot>
            </Content>
            <Footer v-if="$slots.footer">
                <slot name="footer"></slot>
            </Footer>
        </Modal>
    </div>
</template>

<script>

import { actions } from "./store";
import { Overlay, Modal, Header, Content, Footer } from "./styled-component";

export default {
    name: "BaseModal",
    components: {
        Overlay,
        Modal,
        Header,
        Content,
        Footer
    },
    methods: {
        ...actions
    }
}
</script>