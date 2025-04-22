import { View, Text } from 'react-native';
import { Planet } from '../../../types/Planet';
import { profileStyles } from './styles';

type ProfileProps = {
    planetData: Planet;
};

export const ProfileComponent = ({ planetData }: ProfileProps) => {
    return (
        <View style={profileStyles.card}>
            <View style={profileStyles.row}>
                <Text style={profileStyles.label}>Rotation Period</Text>
                <Text style={profileStyles.value}>{planetData.rotation_period}</Text>
            </View>
            <View style={profileStyles.separator} />

            <View style={profileStyles.row}>
                <Text style={profileStyles.label}>Orbital Period</Text>
                <Text style={profileStyles.value}>{planetData.orbital_period}</Text>
            </View>
            <View style={profileStyles.separator} />

            <View style={profileStyles.row}>
                <Text style={profileStyles.label}>Diameter</Text>
                <Text style={profileStyles.value}>{planetData.diameter}</Text>
            </View>
            <View style={profileStyles.separator} />

            <View style={profileStyles.row}>
                <Text style={profileStyles.label}>Climate</Text>
                <Text style={profileStyles.value}>{planetData.climate}</Text>
            </View>
            <View style={profileStyles.separator} />

            <View style={profileStyles.row}>
                <Text style={profileStyles.label}>Gravity</Text>
                <Text style={profileStyles.value}>{planetData.gravity}</Text>
            </View>
            <View style={profileStyles.separator} />

            <View style={profileStyles.row}>
                <Text style={profileStyles.label}>Terrain</Text>
                <Text style={profileStyles.value}>{planetData.terrain}</Text>
            </View>
            <View style={profileStyles.separator} />

            <View style={profileStyles.row}>
                <Text style={profileStyles.label}>Surface Water</Text>
                <Text style={profileStyles.value}>{planetData.surface_water}</Text>
            </View>
            <View style={profileStyles.separator} />

            <View style={profileStyles.row}>
                <Text style={profileStyles.label}>Population</Text>
                <Text style={profileStyles.value}>{planetData.population}</Text>
            </View>
            <View style={profileStyles.separator} />
        </View>

    );
};