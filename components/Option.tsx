import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    option: string
    isSelected: boolean
    checkIfSelected: () => void
    setSelectedOption: any
}

const Option = ({ option, isSelected, checkIfSelected, setSelectedOption }: Props) => {

    const handleSelect = () => {
        setSelectedOption(option)
        checkIfSelected()
    }

    return (
        <Pressable onPress={handleSelect} style={[styles.option, { backgroundColor: isSelected ? "#ABD1C6" : "#FFF" }]}>
            <Text style={{ fontWeight: "500" }} >{option}</Text>
        </Pressable>
    );
};

export default Option;

const styles = StyleSheet.create({
    option: {
        width: "100%",
        height: 45,
        borderRadius: 16,
        paddingHorizontal: 12,
        justifyContent: "center",
        marginBottom: 20,
        backgroundColor: "#fff"
    },
});