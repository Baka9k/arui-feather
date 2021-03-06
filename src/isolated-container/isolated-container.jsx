/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react';

/**
 * Изолирует своих детей от изменений `props`-ов, и `context`-а.
 * Используется для визуализации элементов в кастомных контейнерах,
 * о которых React не должен ничего знать.
 */
class IsolatedContainer extends React.Component {
    /**
     * @type {HTMLElement}
     */
    element;

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (<div ref={ (element) => {
            this.element = element;
        } }
        />);
    }

    /**
     * Возвращает корневой `HTMLElement` компонента.
     *
     * @public
     * @returns {HTMLElement}
     */
    getNode() {
        return this.element;
    }
}

export default IsolatedContainer;
