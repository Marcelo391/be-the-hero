import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import styles from './style';

export default function Incidents(){
    return (        
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> 0 casos</Text>
                </Text>
            </View>

            <Text style={styles.title}> Bem Vindo !</Text>
            <Text style={styles.description}> Escolha um dos casos abaixo e salve o dia</Text>

            <FlatList
                style={styles.incidentList}
                data={1,2,3} 
                renderItem={() =>(
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>TESTE:</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>Cachorro atropelado:</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>R$ 120,00:</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={() => {}}
                        >                        
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02141" />
                        </TouchableOpacity>
                    </View>
                )}
            />

            <View >
                
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>APA11D:</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>Cachorro atropelado:</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>R$ 120,00:</Text>

                    <TouchableOpacity 
                        style={styles.detailsButton}
                        onPress={() => {}}
                    >                        
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02141" />
                    </TouchableOpacity>
                </View>
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>APAD:</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>Cachorro atropelado:</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>R$ 120,00:</Text>

                    <TouchableOpacity 
                        style={styles.detailsButton}
                        onPress={() => {}}
                    >                        
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02141" />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};